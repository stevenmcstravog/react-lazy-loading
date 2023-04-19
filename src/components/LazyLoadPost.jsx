import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

const LazyLoadPost = ({ title, imgUrl }) => (
  <div className="card mb-4">
    <div className="row g-0">
      <div className="col-md-4">
        <LazyLoadImage
          src={imgUrl}
          className="img-fluid rounded-start"
          effect="blur"
        />
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum non
            consequatur officiis deserunt asperiores? Cumque quasi explicabo qui
            eaque autem itaque nihil soluta accusantium? Id at alias magnam non.
            Nobis.
          </p>
        </div>
      </div>
    </div>
  </div>
)

export default LazyLoadPost
