export default function ReviewCard({ title, category, reviewImgUrl }) {
  return (
    <article>
      <h3>Title: {title}</h3>
      <p>Category: {category}</p>
      <img src={reviewImgUrl} alt={title} className="review-img"></img>
    </article>
  );
}
