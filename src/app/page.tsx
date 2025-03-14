import Layout from "@/components/Layout";

const HomePage = () => {
  return (
    <Layout>
      <div className="background-image min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-center text-4xl font-bold text-white bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-6 py-3 inline-block shadow-lg mb-6">
          Sedric Lian Deloy
        </h1>
        <p className="text-center text-2xl font-semibold text-white/80 backdrop-blur-sm bg-white/10 px-6 py-2 rounded-lg shadow-lg">
          BSIT 3
        </p>
      </div>
    </Layout>
  );
};

export default HomePage;