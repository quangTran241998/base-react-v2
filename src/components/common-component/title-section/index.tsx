interface Props {
  title: string;
  desc: string;
}

const TitleSection = ({ title, desc }: Props) => {
  return (
    <div className="mb-10">
      <h2 className="h2 mb-2 text-center">{title}</h2>
      <p className="text-desc text-center mb-2">{desc}</p>
    </div>
  );
};

export default TitleSection;
