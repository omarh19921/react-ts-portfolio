import React from "react";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";

const About = () => {
    return (
        <section
            className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-16 pb-36 md:pt-20 md:pb-44 lg:pt-20 lg:pb-56"
            id="about"
        >
            <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
                <AnimatedTitle
                    text={"Hi, I'm Omar."}
                    className={
                        "mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
                    }
                    wordSpace={"mr-[14px]"}
                    charSpace={"mr-[0.001em]"}
                />
                <AnimatedTitle
                    text={"An Experienced Engineer from NJ"}
                    className={
                        "mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
                    }
                    wordSpace={"mr-[14px]"}
                    charSpace={"mr-[0.001em]"}
                />
                <AnimatedBody
                    delay={0.2}
                    text="  "
                /> 

                <div className="mx-auto flex w-[100%] flex-col lg:max-w-[1200px] lg:flex-row lg:gap-20" style={{ textAlign: 'justify' }}>
                    <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-medium  leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[20px] md:leading-relaxed lg:mb-16  lg:max-w-[90%] lg:text-[24px] ">
                        <AnimatedBody text="My passion lies in creating technology solutions that are both beautiful and functional. I’ve been a network engineer since 2012 and later transitioned into software development." />

                        <AnimatedBody
                            delay={0.1}
                            text="Whether I’m designing network architecture or coding a complex application, I’m always striving to create something unique and innovative. I love experimenting with new technologies and staying up-to-date with the latest trends in the tech world."
                        />

                        <AnimatedBody
                            delay={0.2}
                            text="Right now, I’m working on some exciting projects that I can’t wait to share with you. But I’m always open to new opportunities and collaborations."
                        />
                        <AnimatedBody
                            delay={0.2}
                            text="I currently own and manage an agency called Think Big Technology in the NYC area, we handle all B2B technology operations ranging from {implementing Artificial Intelligence & Machine Learning models} to  {Data Migration & IT Services} to {Building, Deploying and Maintaining Web / Mobile applications}."
                        />
                            <AnimatedBody
                              delay={0.2}
                              text="Thanks to my experience working for large firms such as financial juggernaut, Deutsche Bank, and media giant, Newscorp (Wall Street Journal), I have gained massive insight into the processes implemented by global giants."
                          />
                        <AnimatedBody
                            delay={0.2}
                            text="I currently work full-time as an Information Technology Asset Manager at a construction enterprise where I implement an EITM strategy that focuses on IT governance, business service management & security management."
                        />
                        <AnimatedBody
                            delay={0.2}
                            text="  "
                        /> 
                        
                        <AnimatedTitle
                            text={"Education:"}
                            className={
                                "mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
                            }
                            wordSpace={"mr-[14px]"}
                            charSpace={"mr-[0.001em]"}
                        />
                        <AnimatedBody
                            delay={0.2}
                            text=" - New Jersey Institute of Technology 2010-2014, Computer Engineering Major "
                        />
                       
                        <AnimatedBody
                            delay={0.2}
                            text=" - University of London 2022, Cyber Security Fundamentals "
                        /> 
                        <AnimatedBody
                            delay={0.2}
                            text=" - Princeton University 2022, Computer Science - Programming with a Purpose "
                        /> 
                        <AnimatedBody
                            delay={0.2}
                            text=" - New Jersey Institute of Technology 2023, Cyber Security Certification "
                        />
                        
                        <AnimatedBody
                            delay={0.2}
                            text=" - Western Governors University 2024, M.S. Information Technology Management "
                        />
                        <AnimatedBody
                            delay={0.2}
                            text="  "
                        /> 
                        <AnimatedTitle
                            text={"Certifications:"}
                            className={
                                "mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
                            }
                            wordSpace={"mr-[14px]"}
                            charSpace={"mr-[0.001em]"}
                        />
                        <AnimatedBody
                            delay={0.2}
                            text=" - CompTIA A+ "
                        />
                        <AnimatedBody
                            delay={0.2}
                            text=" - CompTIA Network+ "
                        />
                        <AnimatedBody
                            delay={0.2}
                            text=" - CompTIA Security+ "
                        />
                        <AnimatedBody
                            delay={0.2}
                            text=" - CompTIA IT Operations Specialist "
                        />
                        <AnimatedBody
                            delay={0.2}
                            text=" - CompTIA Secure Infrastructure Specialist "
                        />
                        <AnimatedBody
                            delay={0.2}
                            text=" - Amazon AWS Cloud Practitioner "
                        />
                        <AnimatedBody
                            delay={0.2}
                            text=" - Axelos Global Best Practice, ITIL®*^ Foundation Certification "
                        />
                        <AnimatedBody
                            delay={0.2}
                            text=" - Project Management Institute PMI CAPM "
                        />
                        <AnimatedBody
                            delay={0.2}
                            text=" - Linux Professional Institute LPI Linux Essentials "
                        />
                        <AnimatedBody
                            delay={0.2}
                            text=" - IBM DevOps and Software Engineering Professional Certificate "
                        />
                        <AnimatedBody
                            delay={0.2}
                            text=" - IBM Full Stack Software Developer Professional Certificate "
                        />
                        
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
