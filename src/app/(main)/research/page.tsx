
import { Stack } from '@mantine/core';
import { H2 } from '@/components/Headings';
import { Paragraph } from '@/components/Paragraph';
import { Publication } from '@/components/Publication';

export default function Page() {
  return (
    <div>
    <H2>Interests</H2>
    <Paragraph>
      ...
    </Paragraph>
    <H2>Publications</H2>
    <Stack gap="md">
      <Publication 
        title="Don't Just Follow MLLM Plans: Robust Planning for Open-world Agents"
        authors={<>Seungjoon Lee, Suhwan Kim, <u>Minhyeon Oh</u>, Youngsik Yoon, Jungseul Ok</>}
        venue="NeurIPS 2025 (Under review)"
      />
      <Publication 
        title="Comparison-based Active Preference Learning for Multi-dimensional Personalization"
        authors={<><u>Minhyeon Oh</u>, Seungjoon Lee, Jungseul Ok</>}
        venue="ACL 2025 Main (Long)"
        links={{
          home: "/research/comparison-based-active-preference-learning-for-multi-dimensional-personalization",
          paper: "https://arxiv.org/abs/2411.00524",
          code: "empty"
        }}
      />
      <Publication 
        title="Active Learning for Semantic Segmentation with Multi-class Label Query"
        authors={<>Sehyun Hwang, Sohyun Lee, Hoyoung Kim, <u>Minhyeon Oh</u>, Jungseul Ok, Suha Kwak</>}
        venue="NeurIPS 2023"
        links={{
          paper: "http://arxiv.org/abs/2309.09319",
          code: "https://github.com/sehyun03/MulActSeg"
        }}
      />
      <Publication 
        title="Adaptive Superpixel for Active Learning in Semantic Segmentation"
        authors={<>Hoyoung Kim, <u>Minhyeon Oh</u>, Sehyun Hwang, Suha Kwak, Jungseul Ok</>}
        venue="ICCV 2023"
        links={{
          home: "https://cskhy16.github.io/assets/pdf/poster_kimadaptive23.pdf",
          paper: "https://arxiv.org/abs/2303.16817",
          code: "https://github.com/ml-postech/adaptive-superpixel-for-active-learning-in-semantic-segmentation"
        }}
      />
    </Stack>
    </div>
  )
}