uniform vec3 iResolution;
uniform float iTime;
varying vec2 vUv;

// // === Editable parameters ===
// const float ellipse_center_x = 0.0;        // Center of ellipse, as fraction of width (0 = left edge)
// const float ellipse_center_y = 0.5/3.0;    // Center of ellipse, as fraction of height

// const float ellipse_radius_x = 0.2;      // Ellipse radius as fraction of width (1/5)
// const float ellipse_radius_y = 0.5;     // Ellipse radius as fraction of height
// const float ellipse_softness = 0.3;     // Soft edge for ellipse

// const float line_leg_x = 0.35;             // Horizontal leg length as fraction of width (from right edge)
// const float line_leg_y = 0.6;             // Vertical leg length as fraction of height (from top edge)
// const float line_softness = 0.3;          // Soft edge for line mask

// vec3 gradient(float x) {
//     // Linear gradient from #56e2e1 to #58e5be
//     vec3 left = vec3(0x56, 0xe2, 0xe1) / 255.0;
//     vec3 right = vec3(0x58, 0xe5, 0xbe) / 255.0;
//     return mix(left, right, x);
// }

// float rand(vec2 co){
//     return fract(sin(dot(co, vec2(12.9898, 78.233))) * 43758.5453);
// }

// // Returns 1.0 inside the ellipse (cutout), 0.0 outside, with soft edge
// float ellipseMask(vec2 uv) {
//     float cx = ellipse_center_x; // center x (from left)
//     float cy = ellipse_center_y; // center y (from top)
//     // if (uv.x > cx) return 0.0;
//     float nx = (uv.x - cx) / ellipse_radius_x;
//     float ny = (uv.y - cy) / ellipse_radius_y;
//     float dist = sqrt(nx*nx + ny*ny);
//     float edge = 1.0 - smoothstep(1.0 - ellipse_softness, 1.0 + ellipse_softness, dist);
//     return edge;
// }

// // Returns 1.0 inside the line (cutout), 0.0 outside, with soft edge
// float lineMask(vec2 uv) {
//     float slope = line_leg_y / line_leg_x;
//     float left = 1.0 - line_leg_x;
//     // Inverted smoothstep: white on the right of the line, soft transition
//     float d = uv.y - slope * (uv.x - left);
//     float mask = 1.0 - smoothstep(0.0, line_softness, d);
//     return mask;
// }

// void main() {
//     vec2 uv = vUv;

//     // Calculate masks (1.0 = inside cutout, 0.0 = outside)
//     float ellipse = ellipseMask(uv);
//     float line = lineMask(uv);

//     // The "cutout" is where either mask is > 0
//     float cutout = max(ellipse, line);

//     // Grain background (flat color + grain)
//     float grainScale = 600.0; // or your preferred scale
//     vec2 grainUV = floor(uv * grainScale) / grainScale;
//     float grain = rand(grainUV * grainScale);
//     float grainStrength = 0.15;

//     vec3 backgroundColor = vec3(0.9); // flat background
//     float safeGrainX = clamp(grainUV.x, 0.0, 1.0);
//     vec3 grainColor = gradient(safeGrainX);

//     // Only show the gradient in the grains, not the background
//     vec3 color = mix(backgroundColor, grainColor, (grain - 0.5) * 2.0 * grainStrength + 0.5);

//     // Mix with white in the cutout area (keep your existing logic)
//     color = mix(color, vec3(1.0), cutout);

//     gl_FragColor = vec4(color, 1.0);
// }

const float filmGrainIntensity = 0.08;

mat2 Rot(float a) {
    float s = sin(a);
    float c = cos(a);
    return mat2(c, -s, s, c);
}

vec2 hash(vec2 p) {
    p = vec2(dot(p, vec2(2127.1, 81.17)), dot(p, vec2(1269.5, 283.37)));
    return fract(sin(p)*43758.5453);
}

float noise(in vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);

    vec2 u = f*f*(3.0-2.0*f);

    float n = mix(mix(dot(-1.0+2.0*hash(i + vec2(0.0, 0.0)), f - vec2(0.0, 0.0)),
    dot(-1.0+2.0*hash(i + vec2(1.0, 0.0)), f - vec2(1.0, 0.0)), u.x),
    mix(dot(-1.0+2.0*hash(i + vec2(0.0, 1.0)), f - vec2(0.0, 1.0)),
    dot(-1.0+2.0*hash(i + vec2(1.0, 1.0)), f - vec2(1.0, 1.0)), u.x), u.y);
    return 0.5 + 0.5*n;
}

float filmGrainNoise(in vec2 uv) {
    return length(hash(vec2(uv.x, uv.y)));
}

void mainImage( out vec4 fragColor, in vec2 fragCoord) {
    vec2 uv = fragCoord / iResolution.xy;
    float aspectRatio = iResolution.x / iResolution.y;
    
    // Transformed uv
    vec2 tuv = uv - .5;

    // Rotate with noise
    float degree = noise(vec2(iTime*.05, tuv.x*tuv.y));

    tuv.y *= 1./aspectRatio;
    tuv *= Rot(radians((degree-.5)*720.+180.));
    tuv.y *= aspectRatio;

    // Wave warp with sine
    float frequency = 5.;
    float amplitude = 30.;
    float speed = iTime * 2.;
    tuv.x += sin(tuv.y*frequency+speed)/amplitude;
    tuv.y += sin(tuv.x*frequency*1.5+speed)/(amplitude*.5);
    
    // Light gradient colors
    vec3 lightTan = vec3(245, 222, 179) / vec3(255);
    vec3 peachOrange = vec3(255, 165, 100) / vec3(255);
    vec3 softWhite = vec3(255, 250, 240) / vec3(255);
    vec3 warmOrange = vec3(255, 140, 80) / vec3(255);
    
    // Dark gradient colors
    vec3 deepRed = vec3(193, 43, 21) / vec3(255);
    vec3 darkTan = vec3(139, 115, 85) / vec3(255);
    vec3 burnedOrange = vec3(204, 85, 40) / vec3(255);
    vec3 richTan = vec3(210, 180, 140) / vec3(255);
    
    // Interpolate between light and dark gradient
    float cycle = sin(iTime * 0.5);
    float t = (sign(cycle) * pow(abs(cycle), 0.6) + 1.) / 2.;
    vec3 color1 = mix(lightTan, deepRed, t);
    vec3 color2 = mix(peachOrange, darkTan, t);
    vec3 color3 = mix(softWhite, burnedOrange, t);
    vec3 color4 = mix(warmOrange, richTan, t);

    // Blend the gradient colors and apply transformations
    vec3 layer1 = mix(color3, color2, smoothstep(-.3, .2, (tuv*Rot(radians(-5.))).x));
    vec3 layer2 = mix(color4, color1, smoothstep(-.3, .2, (tuv*Rot(radians(-5.))).x));
    
    vec3 color = mix(layer1, layer2, smoothstep(.5, -.3, tuv.y));

    // Apply film grain
    color = color - filmGrainNoise(uv) * filmGrainIntensity;
    
    fragColor = vec4(color, 1.0);  
}

void main(){
  vec2 uv = vUv;
  
  mainImage(gl_FragColor, vUv * iResolution.xy);
}