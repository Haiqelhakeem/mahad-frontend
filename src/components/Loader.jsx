import { Watch } from "react-loader-spinner"

const Loader = () => {
    return (
        <div className="w-full h-screen flex flex-col justify-center items-center gap-2">
            <Watch
                visible={true}
                height="80"
                width="80"
                radius="48"
                color="#4fa94d"
                ariaLabel="watch-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
            <h1>Loading...</h1>
        </div>
    )
}

export default Loader