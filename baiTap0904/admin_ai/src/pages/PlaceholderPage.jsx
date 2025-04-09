const PlaceholderPage = ({ title }) => {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-semibold text-pink-500">{title}</h1>
      <div className="rounded-xl bg-white p-8 text-center text-gray-500">
        {title} page content will be implemented in later stages
      </div>
    </div>
  );
};

export default PlaceholderPage;
