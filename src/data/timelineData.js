export const timelineEvents = [
  {
    year: "Jan 2025",
    title: "Anti-turbulence of UAVs",
    institution: "University of Utah",
    category: "Project",
    cardDescription:
      "End-to-end UAV stabilization system integrating IMU, GPS, and airspeed sensors to infer wind conditions and adapt attitude control in real time.",
    detailDescription:
      "This Project focused on the end-to-end development of a wind-aware UAV stabilization system,progressing from initial concept and simulation to real-world experimental validation. I desgined a multi-sensor fusion framework that integrated IMU,GPS,and airspeed sensors to estimate wind direction and wind speed relative to the vehicle.Using this information, the UAV dynamically adjusted its attitude control strategy in real time to compensate for wind-induced disturbances",
      "The system was first evaluated in simulation to validate feasibility and tune control parameters, followed by hardware implementation and field testing. through iterative refinement of sensor fusion logic and control responses, the UAV demoonstrated significantly improved robustness under varying wind conditions.Experimental results showed a 35% improvement in flight stability, confirming the effectiveness of combining environmental sensing with adaptive attitude control for eral-world autonomous flight",
    bullets: [
      "Implemented end-to-end sensor integration across GPS,IMU,and (MATEDKSYS ASPD-4525)air speed sensor,improving state estimation fidelity and flight robustness",
      "Achieved controllability by 35% improvement in turbulent airflow",
      "Designed and Validated real-time wind estimation and sensor-fusion algorithms in Matlab",
      "Delivered Low-Level firmware and middleware integrations within PX4 and Ardupilot.",
    ],
    tags: ["Ardupilot(APM)", "VScode", "Linux", "ROS2", "Gazebo", "PX4", "Slam"],
    bgGradient: "linear-gradient(135deg, #0f1729 0%, #1e3a5f 50%, #c8a84e 100%)",
    bgImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
    contentImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
    showContentImageInCard: false,
  },
  {
    year: "May 2024",
    title: "Class-E Amplifier",
    institution: "University of Utah",
    category: "Project",
    cardDescription:
      "End-to-end design of a Class-E amplifier enabling efficient wireless power delivery to a long distance wireless power supply.",
    detailDescription:
      "Collaborated with Prof. Darrin Young on the end-to-end design and validation of a Class-E amplifier enabling efficient wireless power delivery to a remote microcontroller, gaining hands-on experience in RF power electronics and resonant system design. This project deepened my understanding of high-frequency circuit behavior and efficiency optimization.",
    bullets: [
      "Designed high-efficiency Class-E switching amplifier topology",
      "Implemented wireless power transfer to remote microcontroller",
      "Gained expertise in RF power electronics",
      "Optimized resonant system for maximum efficiency",
    ],
    tags: ["Pspice", "RF System", "Power Electronics", "Algorithms"],
    bgGradient: "linear-gradient(135deg, #1a1a2e 0%, #2d3436 50%, #636e72 100%)",
    bgImage: "https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?auto=format&fit=crop&w=1200&q=80",
    contentImage: "https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?auto=format&fit=crop&w=1200&q=80",
    showContentImageInCard: false,
  },
  {
    year: "May 2023",
    title: "Micro Pressure Sensor",
    institution: "Utah Nanofab",
    category: "Project",
    cardDescription:
      "MEMS micro pressure sensor with ~500 µm diaphragm achieving ~1.8 mV/kPa sensitivity over 0–100 kPa range.",
    detailDescription:
      "Independently designed and fabricated a MEMS micro pressure sensor with a ~500 µm diaphragm, achieving ~1.8 mV/kPa sensitivity over a 0–100 kPa range. Gained hands-on experience in nanofabrication, MEMS design, and experimental validation. The project involved cleanroom fabrication processes and precise calibration procedures.",
    bullets: [
      "Designed ~500 µm diaphragm structure for pressure sensing",
      "Achieved ~1.8 mV/kPa sensitivity across 0–100 kPa range",
      "Performed cleanroom nanofabrication at Utah Nanofab",
      "Conducted comprehensive experimental validation",
    ],
    tags: ["AutoCad", "Semiconductor", "MEMS", "Micro Sensor", "Comsol"],
    bgGradient: "linear-gradient(135deg, #1a2a3a 0%, #2c4a6a 50%, #3a7ca5 100%)",
    bgImage: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
    contentImage: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
    showContentImageInCard: false,
  },
  {
    year: "Jan 2023",
    title: "Stage Amplifier",
    institution: "University of Utah",
    category: "Laboratory",
    cardDescription:
      "Three-stage amplifier design analyzing gain distribution, biasing stability, and inter-stage interactions.",
    detailDescription:
      "Designed and tested a three-stage amplifier in the laboratory to analyze gain distribution, biasing stability, and inter-stage interactions. Evaluated overall system performance through experimental measurements, gaining hands-on experience with multi-stage analog circuit behavior and practical debugging of real-world non-ideal effects.",
    bullets: [
      "Analyzed gain distribution across three amplifier stages",
      "Evaluated biasing stability and inter-stage coupling",
      "Debugged real-world non-ideal effects",
      "Compared simulation predictions with measured performance",
    ],
    tags: ["PCB", "Python", "Pspice"],
    bgGradient: "linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)",
    bgImage: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=80",
    contentImage: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=80",
    showContentImageInCard: false,
  },
  {
    year: "Aug 2022",
    title: "MOSFET & Amplifier",
    institution: "University of Utah",
    category: "Laboratory",
    cardDescription:
      "MOSFET device behavior and amplifier circuits through simulation and hands-on laboratory validation.",
    detailDescription:
      "Studied the behavior of MOSFET devices and amplifier circuits through a combination of circuit simulation and hands-on laboratory validation. Designed and analyzed biasing conditions and amplifier configurations in simulation, then implemented and tested the corresponding circuits in the lab to compare theoretical predictions with measured performance. Investigated discrepancies caused by non-ideal effects, component tolerances, and real device behavior.",
    bullets: [
      "Designed and analyzed MOSFET biasing conditions",
      "Implemented and tested amplifier configurations",
      "Compared theoretical predictions with measurements",
      "Investigated non-ideal effects and component tolerances",
    ],
    tags: ["Orcad", "Python", "Java", "Matlab"],
    bgGradient: "linear-gradient(135deg, #141e30 0%, #243b55 50%, #2d6a4f 100%)",
    bgImage: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=1200&q=80",
    contentImage: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=1200&q=80",
    showContentImageInCard: false,
  },
  {
    year: "May 2022",
    title: "Logic Gate",
    institution: "University of Utah",
    category: "Project",
    cardDescription:
      "Sensor-driven automatic switching system using logic gates and LDR for hardware-level control.",
    detailDescription:
      "Designed a sensor-driven automatic switching system using logic gates and an LDR, translating environmental inputs into deterministic hardware-level control without microcontrollers. This project demonstrated fundamental digital logic design principles and sensor integration.",
    bullets: [
      "Designed automatic switching system with logic gates",
      "Integrated LDR for environmental sensing",
      "Implemented deterministic hardware-level control",
      "Achieved microcontroller-free operation",
    ],
    tags: ["Matlab", "Python", "JavaScript", "LTspice"],
    bgGradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #533483 100%)",
    bgImage: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80",
    contentImage: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80",
    showContentImageInCard: false,
  },
  {
    year: "Jan 2022",
    title: "B.Sc. Electrical & Computer Engineering",
    institution: "University of Utah",
    category: "Education",
    cardDescription:
      "Transitioned to ECE to build technical foundations for intelligent systems, robotics, and autonomous control.",
    detailDescription:
      "Driven by a forward-looking perspective and a strong curiosity about emerging technologies, I decided to transition my major to Electrical and Computer Engineering. As my interests evolved toward intelligent systems, computation, and automation, I recognized that future technological advances would be increasingly shaped by electronics, embedded computing, and software-hardware integration. This shift allowed me to build the technical foundation necessary to engage more deeply with modern engineering challenges.",
    bullets: [
      "Recognized the growing importance of electronics and embedded computing",
      "Built foundations for robotics and autonomous systems",
      "Developed skills in software-hardware integration",
      "Prepared for intelligent control system design",
    ],
    tags: ["Forward-Looking Mindset", "Intelligent Systems", "Electrical & Computer Engineering"],
    bgGradient: "linear-gradient(135deg, #0d1b2a 0%, #1b2838 50%, #2c3e50 100%)",
    bgImage: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80",
    contentImage: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80",
    showContentImageInCard: false,
  },
  {
    year: "May 2021",
    title: "Chem & Phys Laboratory",
    institution: "University of Utah",
    category: "Laboratory",
    cardDescription:
      "Foundational experiments in chemistry and physics laboratories for measurement, analysis, and experimental reasoning.",
    detailDescription:
      "Conducted structured experiments in chemistry and physics laboratories, building foundational skills in measurement, analysis, and experimental reasoning. This experience supported my later engineering work by reinforcing the importance of empirical validation and physical system understanding.",
    bullets: [
      "Developed foundational measurement and analysis skills",
      "Practiced experimental reasoning and methodology",
      "Reinforced importance of empirical validation",
      "Built understanding of physical system behavior",
    ],
    tags: ["Experimental Methods", "Data Analysis", "Physical Principles"],
    bgGradient: "linear-gradient(135deg, #1a2332 0%, #1e3a5f 50%, #2962ff 100%)",
    bgImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    contentImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    showContentImageInCard: false,
  },
  {
    year: "Jan 2020",
    title: "Centrifugal Pump Project",
    institution: "University of Utah",
    category: "Project",
    cardDescription:
      "Independently designed and fabricated a centrifugal pump achieving 7.8 GPM flow rate.",
    detailDescription:
      "Independently designed and fabricated a centrifugal pump achieving 7.8 GPM flow rate. Led the full workflow including performance analysis, CAD modeling, SolidWorks part design, fabrication, and experimental validation, gaining hands-on experience in fluid machinery design and system-level optimization.",
    bullets: [
      "Achieved 7.8 GPM flow rate through optimized design",
      "Led complete design-to-fabrication workflow",
      "Performed CAD modeling and SolidWorks part design",
      "Conducted performance analysis and experimental validation",
    ],
    tags: ["Experimental Validation", "AutoCad", "SolidWorks"],
    bgGradient: "linear-gradient(135deg, #1b1b3a 0%, #2d2d6b 50%, #3949ab 100%)",
    bgImage: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80",
    contentImage: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80",
    showContentImageInCard: false,
  },
  {
    year: "Aug 2019",
    title: "B.Sc. Mechanical Engineering",
    institution: "University of Utah",
    category: "Education",
    cardDescription:
      "Began undergraduate studies building foundations in mechanics, materials, design, and manufacturing.",
    detailDescription:
      "In 2019, I formally began my undergraduate studies in Mechanical Engineering at the University of Utah. During this period, I built a solid foundation in core engineering disciplines, including mechanics, materials science, mechanical design, and manufacturing processes. Through extensive laboratory work and project-based learning, I developed strong skills in engineering modeling, problem decomposition, and experimental validation. As my studies progressed, I recognized that complex engineering systems require control, computation, and intelligent decision-making.",
    bullets: [
      "Built foundation in mechanics and materials science",
      "Developed mechanical design and manufacturing skills",
      "Practiced engineering modeling and problem decomposition",
      "Recognized importance of computation in modern systems",
    ],
    tags: ["Systems Engineering", "Design Methodology", "Mechanical Engineering"],
    bgGradient: "linear-gradient(135deg, #0c1445 0%, #1a237e 50%, #283593 100%)",
    bgImage: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80",
    contentImage: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80",
    showContentImageInCard: false,
  },
];
