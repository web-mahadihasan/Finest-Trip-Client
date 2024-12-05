

const FAQ = ({faqData}) => {
    
    return (
        <div className="join join-vertical w-full my-10">
        <h3 className="p-3 font-rubik text-titleBlack font-medium text-2xl mb-5">
            FAQ - General Visa Information
        </h3>

        {/* Defaul Faq  */}
        <div className="collapse collapse-arrow join-item border-base-300 border">
            <input type="radio" name="my-accordion-4" defaultChecked/>
            <div className="collapse-title text-titleBlack text-[18px] font-medium font-rubik">
            Can I fill in my visa application in a language other than
            English?
            </div>
            <div className="collapse-content">
            <p className="font-jost text-black/65 text-lg">
                No. At Present our online application system only supports
                applications made in English.
            </p>
            </div>
        </div>
        {/* Faq from json data  */}
        {
            faqData?.map((faq, idx) =>  (
                <div key={idx} className="collapse collapse-arrow join-item border-base-300 border">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-titleBlack text-[18px] font-medium font-rubik">
                        <span>{idx+1}. </span>
                        <span>{faq?.question}</span>
                    </div>
                    <div className="collapse-content">
                    <p className="font-jost text-black/65 text-lg">
                        {faq.answer}
                    </p>
                    </div>
                </div>
            ))
        }
        </div>
    );
};

export default FAQ;
