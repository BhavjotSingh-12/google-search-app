import ProfileIcon from "./ProfileIcon";

const HomeHeader = () => {
    return (
        <header className="h-16 flex justify-between md:justify-end gap-4 px-5 pt-5">
            <div className="flex gap-4">
                <span className="text-black[0.87] text-[13px] line-height hover:underline cursor-pointer mt-2">
                    Gmail
                </span>
                <span className="text-black[0.87] text-[13px] line-height hover:underline cursor-pointer mt-2">
                    Images
                </span>
            </div>
            <ProfileIcon/>
        </header>
    )
};

export default HomeHeader;
