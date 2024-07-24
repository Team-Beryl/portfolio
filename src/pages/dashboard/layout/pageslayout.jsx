

const PagesLayout = ({ headerText, buttonDashboard, buttonText, children, onClick }) => {
    return (
        <div className='p-10 flex-col gap-y-16 pt-4'>

            <div className='flex justify-end gap-4 pb-3'> {/* Added justify-end to align buttons to the right */}
                <h1 className="text-3xl font-bold pr-[500px] ">
                    {headerText}
                </h1>
                <button className='bg-white hover:bg-primary hover:text-white text-black px-6 py-2 rounded-full shadow-inner' onClick={onClick}>
                    {buttonDashboard}
                </button>
                <button className='bg-white text-black hover:bg-primary hover:text-white px-6 py-2 rounded-full flex shadow-inner' onClick={onClick}>
                    {buttonText}
                </button>
            </div>

            <div>{children}</div>
        </div>
    );
};

export default PagesLayout;

