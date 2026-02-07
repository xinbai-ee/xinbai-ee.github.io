export const timelineEvents = [
  {
    year: "Jan 2025",
    title: "Anti-turbulence of UAVs",
    institution: "University of Utah",
    category: "Project",
    cardDescription:
      "End-to-end UAV stabilization system integrating IMU, GPS, and airspeed sensors to infer wind conditions and adapt attitude control in real time.",
    detailDescription:
      "This Project focused on the end-to-end development of a wind-aware UAV stabilization system,progressing from initial concept and simulation to real-world experimental validation. I desgined a multi-sensor fusion framework that integrated IMU,GPS,and airspeed sensors to estimate wind direction and wind speed relative to the vehicle.Using this information, the UAV dynamically adjusted its attitude control strategy in real time to compensate for wind-induced disturbances<br>The system was first evaluated in simulation to validate feasibility and tune control parameters, followed by hardware implementation and field testing. through iterative refinement of sensor fusion logic and control responses, the UAV demoonstrated significantly improved robustness under varying wind conditions.Experimental results showed a 35% improvement in flight stability, confirming the effectiveness of combining environmental sensing with adaptive attitude control for eral-world autonomous flight",
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
      "End-to-end design of a Class-E amplifier enabling efficient wireless power delivery to the long distance wireless power supply.",
    detailDescription:
      "Collaborated with Prof. Darrin Young on the end-to-end design and validation of a Class-E amplifier enabling efficient wireless power delivery to the wireless power supply.The project focused on designing a high-efficiency RF power stage and a resonant inductive coupling architecture to transmit energy across a physical gap without wired connections.<br>I contributed to the complete engineering workflow, including circuit topology selection, component sizing, and resonant network design.The amplifier and coil system were first analyzed and optimized through SPICE simulation, followed by laboratory characterization of commercially available components to accounts for non-ideal behavior.Based on these results, the circuit was implemented on a custom PCB using off-the-shelf components<br>The prototype system was experimentally tested to verify soft-switching behavioor, resonant operation, and stable power transfer to a remote load. The final implementation successfully demonstrated wireless power delivery sufficient to energize a target electronic system, validating both the circuit design and the inductive coupling approach. ThisProject strengthened my experience in RF power electronics, resonant systems, and hardware validation, and highlighted the importance of integrating simulation, measurement, and system-level testing in practical wireless power applications.",
    bullets: [
      "Led the deelopment of a Class-E RF power amplifier, integrating theoretical modeling, circuit simulation, and experimental validation",
      "validated simulation results through hardware prototyping and RF measurements, correlating drain waveforms and efficiency with theoretical predictions and achieved 65% efficiency.",
      "Enhanced efficiency and spectral purity via iterative component tuning and MOSFET switching analysis, improving real-world Class-E performance.",
      "Optimized resonant system for maximum efficiency based on field experiment.",
    ],
    tags: ["Pspice", "RF System", "Power Electronics", "Algorithms","Wireless charging"],
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
      "Designed MEMS micro pressure sensor with ~500 µm diaphragm achieving ~1.8 mV/kPa sensitivity over 0–100 kPa range.",
    detailDescription:
      "Independently designed and fabricated a MEMS micro pressure sensor with a ~500 µm diaphragm, achieving ~1.8 mV/kPa sensitivity over a 0–100 kPa range.The project covered the complete workflow from device concept and layout to cleanroom fabrication,packaging,and experimental characterization.<br>I developed the device structure based on pressure-to-strain transduction and translated the design into a manufacturable mask layout with consideration of membrane thickness, stress concentration, and process constraints.Fabrication was performed in a nanofabrication cleanroom environment, where I gained hands-on experience with process steps including pphotolithography alignment, thin-film deposition and etching to define the diaphragm and sensing features.I tracked process parameters and yield-impacting factors to ensure device integrity and repeatability<br>Following fabrication, I carried out calibration adn characterization using controlled precise calibration procedures to map sensor output to applied pressure, analyzed measurement noise and drift, and validated performance against design expectations. This project strengthened my practical understanding of MEMS design,cleanroom process integration and experimental validation of micro-scale sensors",
    bullets: [
      "Independently designed and fabricated a MEMS micro pressure sensor from concept to validation",
      "Designed ~500 µm diaphragm structure for sensitivity and mechanical reliability",
      "Achieved ~1.8 mV/kPa sensitivity across 0–100 kPa range",
      "Performed cleanroom nanofabrication at Utah Nanofab",
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
      "Three-stage amplifier design and laboratory validation",
    detailDescription:
      "This project focused on the design and laboratory validation of a three-stage amplifier, with emphasis on understanding how individual amplification stages interact within a complete analog system. Each stage was designed to operate under stable biasing conditions while contributing to the overall gain adn signal integrity of the amplifier.<br>The circuit was first analyzed and refined through theoreticcal calculations and simulation, followed by hands-on laboratory implementation.Experimental measurements were used to evaluate gain, signal distortion, and inter-stage loading efffects.Through iterative testing and adjustment, the amplifier achieved stable operatioon adn predictable performance across all stages.<br>This project strengthened my understanding of multi-stage analog circuit behavior, practical viasing strategies, and the importancce of validating theoretical designs through real hardware measurements.",
      
    bullets: [
      "Designed and analyzed a three-stage amplifier with stable biasing for each stage  ",
      "Studied gain distribution and inter-stage loading effects in multi-stage analog circuits",
      "Validated amplifier performance through laboratory measurements ",
      "Investigated non-ideal effects including component tolerances and signal distortion",
      "Gained hands-on experience in analog circuit debugging and validation",
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
      "Designed and implemented MOSFET-based amplifier circuits with a focus on practical performance and hardware validation. Selected device operating points and biasing networks to ensure stable operation under real component constraints, and verified design choices through circuit simulation. Built and debugged the amplifier circuits in the laboratory, performing systematic measurements to evaluate gain, bias stability, and signal integrity. Identified and addressed discrepancies between simulated and measured behavior caused by component tolerances, parasitic effects, and non-ideal MOSFET characteristics. Iteratively refined circuit parameters based on experimental feedback, reinforcing a hardware-first, measurement-driven engineering approach.",
    bullets: [
      "Designed and analyzed MOSFET biasing conditions to ensure stable operation",
      "Simulated amplifier configurations to predict gain and operating behavior",
      "Implemented and tested MOSFET amplifier circuits in the laboratory",
      "Compared theoretical and simulated results with experimental measurements",
      "Investigated non-ideal effects and component tolerances in real circuits",
    ],
    tags: ["Orcad", "Python", "Java", "Matlab"],
    bgGradient: "linear-gradient(135deg, #141e30 0%, #243b55 50%, #2d6a4f 100%)",
    bgImage: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=1200&q=80",
    contentImage: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=1200&q=80",
    showContentImageInCard: false,
  },
  {
    year: "May 2022",
    title: "Sensor-Driven Automatic Switching System",
    institution: "University of Utah",
    category: "Project",
    cardDescription:
      "Sensor-driven automatic switching system using logic gates and LDR for hardware-level control.",
    detailDescription:
      "Designed and implemented a sensor-driven automatic switching system using discrete logic gates and a light-dependent resistor (LDR) to achieve deterministic hardware-level control without a microcontroller. The system translated analog sensor signals into digital logic states through thresholding and logic gate combinations, enabling reliable automatic switching behavior based on environmental light conditions. Circuit functionality was verified through bench testing, ensuring stable operation, predictable switching thresholds, and noise-resistant behavior. This project emphasized hardware logic design, sensor interfacing, and low-level control implementation using purely combinational logic",
    bullets: [
      "Designed a sensor-driven automatic switching system using discrete logic gates",
      "Integrated an LDR to convert environmental light conditions into control signals",
      "Implemented deterministic hardware-level control without a microcontroller",
      "Designed logic thresholding to translate analog sensor output into digital states",
      "Demonstrated reliable, low-latency control using purely combinational logic",
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
      "Independently designed and fabricated a centrifugal pump from initial concept through experimental validation, achieving a measured flow rate of 7.8 gallons per minute. Led the complete design-to-fabrication workflow, including impeller geometry design, housing layout, and mechanical integration. Performed CAD modeling and assembly using SolidWorks, incorporating design iterations to optimize flow performance and mechanical reliability. Fabricated and assembled the pump prototype, then conducted experimental testing to evaluate flow rate and operational stability. Compared measured performance against design expectations and refined the design based on experimental feedback, demonstrating an end-to-end mechanical engineering approach from analysis to physical validation.",
    bullets: [
      "Achieved 7.8 GPM flow rate through optimized design",
      "Led complete design-to-fabrication workflow",
      "Performed CAD modeling and SolidWorks part design",
      "Conducted performance analysis and experimental validation",
    ],
    tags: ["Experimental Validation", "AutoCad", "SolidWorks","Leadership"],
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
