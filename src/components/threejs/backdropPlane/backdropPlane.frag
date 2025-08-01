uniform vec3 iResolution;
uniform float iTime;
uniform float uScrollOffset;
uniform float uPageTransition;
varying vec2 vUv;
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
    
    // Home page colors
    vec3 lightTan = vec3(245, 222, 179) / vec3(255);
    vec3 peachOrange = vec3(255, 165, 100) / vec3(255);
    vec3 softWhite = vec3(255, 250, 240) / vec3(255);
    vec3 warmOrange = vec3(255, 140, 80) / vec3(255);
    vec3 deepRed = vec3(193, 43, 21) / vec3(255);
    vec3 darkTan = vec3(139, 115, 85) / vec3(255);
    vec3 burnedOrange = vec3(204, 85, 40) / vec3(255);
    vec3 richTan = vec3(210, 180, 140) / vec3(255);
    
    // Projects page colors (blacks, grays, whites)
    vec3 white = vec3(1.0);
    vec3 lightGray = vec3(0.4);
    vec3 medGray = vec3(0.25);
    vec3 darkGray = vec3(0.15);
    vec3 charcoal = vec3(0.08);
    vec3 black = vec3(0.0);
    
    // Interpolate between light and dark gradient
    float cycle = sin(iTime * 0.5);
    float t = (sign(cycle) * pow(abs(cycle), 0.6) + 1.) / 2.;
    
    // Home page colors
    vec3 homeColor1 = mix(lightTan, deepRed, t);
    vec3 homeColor2 = mix(peachOrange, darkTan, t);
    vec3 homeColor3 = mix(softWhite, burnedOrange, t);
    vec3 homeColor4 = mix(warmOrange, richTan, t);
    
    // Projects page colors
    vec3 projColor1 = mix(medGray, charcoal, t);
    vec3 projColor2 = mix(darkGray, black, t);
    vec3 projColor3 = mix(medGray, darkGray, t);
    vec3 projColor4 = mix(darkGray, medGray, t);
    
    // Smooth transition between page color schemes
    vec3 color1 = mix(homeColor1, projColor1, uPageTransition);
    vec3 color2 = mix(homeColor2, projColor2, uPageTransition);
    vec3 color3 = mix(homeColor3, projColor3, uPageTransition);
    vec3 color4 = mix(homeColor4, projColor4, uPageTransition);

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