import useFetch from "./useFetch";

const Home = () => {
    const { error, isPending, data: blogs } = useFetch("https://localhost:8000/blogs");
}

export default Home;