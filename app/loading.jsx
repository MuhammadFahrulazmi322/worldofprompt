const Loading = () => {
  return (
    <div className="flex flex-col gap-12 items-center justify-center h-screen ">
      <div className="animate-spin rounded-full h-24 w-24 border-t-2 border-b-2 border-white "></div>
      <div>
        <p className="text-xl font-bold text-white">Waiting Data From Server</p>
      </div>
    </div>
  );
};

export default Loading;
