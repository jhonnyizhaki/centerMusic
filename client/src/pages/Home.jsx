import React, { useEffect, useState } from "react"
import styles from "./Home.module.css"
import CardInstruments from "../components/CardInstruments"

const Home = () => {
  return (
    <div>
      <ImageSlider />
      <CardInstruments />
    </div>
  )
}

export default Home

const ImageSlider = () => {
  const [imageIndex, setImageIndex] = useState(0)

  const images = ["/image1.webp", "/image2.jpg"]

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % images.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])
  return (
    <div className={styles.slideshowContainer}>
      {images.map((image, index) => (
        <div
          key={image}
          className={`${styles.slide} ${index === imageIndex ? styles.active : ""}`}
          style={{
            backgroundImage: `url(${image})`,
          }}
        />
      ))}
    </div>
  )
}
