import { reviews } from "../constants"
import ReviewCard from '../components/ReviewCard'
const CustomerReview = () => {
  return (
  <section className="max-container p-5 pb-5">
    <h3 className="font-palanquin text-center text-4xl font-bold"> What our?
      <span className="text-coral-red"> Customers </span>
      say?
    </h3>
    <p className="info-text m-auto mt-4 max-w-lg text-center">Hear our genuine stories from our customers</p>
      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14 ">
        {
        reviews.map((review)=>(
          <ReviewCard
          key={review.customerName}
          imgURL={review.imgURL}
          customerName={review.customerName}
          rating={review.rating}
          feedback={review.feedback}

          />
        ))
        }

      </div>
  </section>
  )
}

export default CustomerReview
