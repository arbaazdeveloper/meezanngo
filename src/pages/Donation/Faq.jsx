import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";

const data = {
    title: "FAQ",
    rows: [
        {
            title: <h1 className="font-bold">Is my money safe with your organization?</h1>,
            content: `
            Absolutely! Rest assured, your money is in safe hands with our organization. We prioritize the security and integrity of all donations entrusted to us, ensuring they are used effectively and responsibly to support our mission and initiatives.`,
        },
        {
            title: <h1 className="font-bold">How is my personal identity protected when making a donation?</h1>,
            content:
                " Your personal identity is safeguarded when you make a donation to our organization. We prioritize the confidentiality and privacy of our donors' information, ensuring that your identity remains confidential and protected. Rest assured that we maintain strict confidentiality protocols to safeguard your privacy and ensure a secure donation process.",
        },
        {
            title: <h1 className="font-bold">Can you provide details on how donations are spent?</h1>,
            content: `Certainly! Your generous donations are allocated towards impactful initiatives such as child education and women empowerment. We prioritize transparency and accountability in our financial management, ensuring that funds are utilized efficiently and effectively to support these vital programs. Your contributions play a crucial role in creating positive change and empowering communities. `,
        },
     
    ],
};

const styles = {
    bgColor: '#f7f7f7',
    titleTextColor: "black",
    rowTitleColor: "black",
    // rowContentColor: 'grey',
    // arrowColor: "red",
};

const config = {
    // animate: true,
    // arrowIcon: "V",
    tabFocus: true
};

 function Faqs() {

    return (
        <div>
            <Faq
                data={data}
                styles={styles}
                config={config}
            />
        </div>
    );
}
export default Faqs