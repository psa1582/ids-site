export type Publication = {
  title: string;
  authors: string;
  venue: string;
  year: string;
  note?: string;
};

export const conferencePublications: Publication[] = [
  {
    authors: "J. Park, Y. Jeong, and J. Park",
    title: "H2NoC: A Hybrid NoC Architecture for FPGAs with Hardened Interconnects",
    venue: "Asia-Pacific Design Automation Conference (ASP-DAC)",
    year: "2026",
  },
  {
    authors: "H. Kwon, J. Kim, and J. Park",
    title:
      "BOA-3DGS: Backward-Striding Optimized Accelerator for Reduced Memory Contention in 3D Gaussian Splatting Training",
    venue: "Asia-Pacific Design Automation Conference (ASP-DAC)",
    year: "2026",
  },
  {
    authors: "S. Lee, D. Nam, and J. Park",
    title: "RGHT-Q: GEMM Unit for Heterogeneous-Homogeneous Tensor Quantization",
    venue: "Design Automation and Test in Europe (DATE)",
    year: "2025",
  },
  {
    authors: "S. Lee, J. Park, and D. Jeon",
    title:
      "A 4.27TFLOPS/W FP4/FP8 Hybrid-Precision Neural Network Training Processor Using Shift-Add MAC and Reconfigurable PE Array",
    venue: "IEEE European Solid-State Circuits Conference (ESSCIRC)",
    year: "2023",
  },
  {
    authors: "S. Park, S. Lee, J. Park, H.-S. Choi, and D. Jeon",
    title:
      "A 0.81mm2 740uW Real-Time Speech Enhancement Processor Using Multiplier-Less PE Arrays for Hearing Aids in 28nm CMOS",
    venue: "IEEE International Solid-State Circuits Conference (ISSCC)",
    year: "2023",
  },
  {
    authors: "S. Jeong, J. Park, and D. Jeon",
    title:
      "A 28nm 1.644TFLOPS/W Floating-Point Computation SRAM Macro with Variable Precision for Deep Neural Network Inference and Training",
    venue: "IEEE European Solid-State Circuits Conference (ESSCIRC)",
    year: "2022",
  },
  {
    authors: "S. Lee, J. Park, and D. Jeon",
    title: "Toward Efficient Low-Precision Training: Data Format Optimization and Hysteresis Quantization",
    venue: "International Conference on Learning Representations (ICLR)",
    year: "2022",
  },
  {
    authors: "S. Woo, J. Park, J. Hong, and D. Jeon",
    title: "Activation Sharing with Asymmetric Paths Solves Weight Transport Problem without Bidirectional Connection",
    venue: "Conference on Neural Information Processing Systems (NeurIPS)",
    year: "2021",
  },
  {
    authors: "J. Park*, S. Lee*, and D. Jeon",
    title:
      "A 40nm 4.81TFLOPS/W 8b Floating-Point Training Processor for Non-Sparse Neural Networks Using Shared Exponent Bias and 24-Way Fused Multiply-Add Tree",
    venue: "IEEE International Solid-State Circuits Conference (ISSCC)",
    year: "2021",
    note: "*Equal contribution",
  },
  {
    authors: "J. Park, J. Lee, and D. Jeon",
    title:
      "A 65nm 236.5nJ/Classification Neuromorphic Processor with 7.5% Energy Overhead On-Chip Learning Using Direct Spike-Only Feedback",
    venue: "IEEE International Solid-State Circuits Conference (ISSCC)",
    year: "2019",
  },
];

export const journalPublications: Publication[] = [
  {
    authors: "S. Lee, B. Kim, J. Park*, and D. Jeon*",
    title: "CLAT: A Clustering-Based Attention Transformer Accelerator for Low-Latency Text Generation in LLMs",
    venue: "IEEE Transactions on Circuits and Systems I: Regular Papers (TCAS-I)",
    year: "2025",
    note: "*Co-corresponding",
  },
  {
    authors: "S. Park, S. Lee, J. Park, H.-S. Choi, K. Lee, and D. Jeon",
    title: "A Real-Time Speech Enhancement Processor for Hearing Aids in 28-nm CMOS",
    venue: "IEEE Journal of Solid-State Circuits (JSSC)",
    year: "2025",
  },
  {
    authors: "J. Park, S. Lee, and D. Jeon",
    title: "A Neural Network Training Processor With 8-Bit Shared Exponent Bias Floating Point and Multiple-Way Fused Multiply-Add Trees",
    venue: "IEEE Journal of Solid-State Circuits (JSSC)",
    year: "2022",
  },
  {
    authors: "J. Park, J. Lee, and D. Jeon",
    title:
      "A 65-nm Neuromorphic Image Classification Processor With Energy-Efficient Training Through Direct Spike-Only Feedback",
    venue: "IEEE Journal of Solid-State Circuits (JSSC)",
    year: "2020",
    note: "Invited",
  },
];
