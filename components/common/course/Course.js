import SimpleCard from './views/SimpleCard';
import WithDescription from './views/WithDescription';

export default function Course({ modalInfos, displayInfos, name, title, description, overview, price, image, hasCertificated, withDescription }) {
  const props = {
    image: image,
    name: name,
    title: title,
    description: description,
    overview: overview,
    price: price,
    hasCertificated: hasCertificated,
    displayInfos: displayInfos,
    modalInfos: modalInfos,
  }

  return withDescription ? <WithDescription {...props} /> : <SimpleCard {...props} />;
}