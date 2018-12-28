#version 450

layout (location = 0) in vec2 inUV;
layout (location = 0) out vec4 outColor;
layout(binding = 0) uniform sampler2D offscreenTexture;
layout(binding = 1) uniform sampler2D upscaledTexture;

void main()
{
	if (inUV.x < 0.499)
	{
		outColor = vec4(texture(offscreenTexture, inUV));
	}
	else if (inUV.x > 0.501)
	{
		outColor = vec4(texture(upscaledTexture, inUV));
	}
	else
	{
                outColor = vec4(1.0, 0.0, 0.0, 1.0);
	}
}