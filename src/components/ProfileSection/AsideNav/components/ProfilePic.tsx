export default function ProfilePic() {
    return (
        <header className="flex flex-col items-center justify-center gap-2 rounded-t-md border-2 border-black py-2 ">
            <div className="size-14">
                <img
                    className="size-full rounded-full"
                    src="https://cdn.vectorstock.com/i/preview-1x/03/16/businessman-avatar-profile-picture-vector-14610316.jpg"
                />
            </div>
            <p className="text-lg text-white">Petar Ivanov</p>
        </header>
    );
}
