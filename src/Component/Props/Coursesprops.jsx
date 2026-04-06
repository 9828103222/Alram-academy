import React from 'react'
import Courses from '../Pages/Courses.jsx'
import amazoncourses from "../../assets/amazoncourses.jpg";
import flipcardcourses from "../../assets/flipcartcourses.jpg"
import messhocourses from "../../assets/messhocourses.jpg"
import jiocourses from "../../assets/jiocourses.jpg"

function CoursesProps() {
  return (
    <>
      <Courses title="Amazon Selling Course Overview"
      about="In this course, you’ll learn the essential strategies to succeed as an Amazon seller"
      description="Our comprehensive Amazon selling course provides all the essential strategies needed to succeed. First, you will dive into Product Research to find winning products with high demand and low competition. You will then master Competitor Analysis to discover opportunities and improve your own offerings. You will also learn techniques for creating a strong brand identity to ensure you stand out from the crowd. Our curriculum further covers Keyword Research and teaches you exactly how to build optimized product listings that capture both visibility and sales. You will master Amazon's specific advertising tools to drive traffic and then we will break down the differences between FBA, FBM, IXD, and self-ship options so you can select the best fulfillment method. We also dedicate sections to showing you how to track and analyze your performance metrics to optimize operations. Lastly, you will gain essential knowledge in setting up your professional brand store, creating high-converting A+ Content, developing profitable pricing strategies, and managing customer service queries with a high level of professionalism."

      title2="Flipkart Selling Course Overview"
      about2="In this course, you’ll learn the essential strategies to succeed as an Flipkart seller"
      description2="Our comprehensive Flipkart Selling Course provides you with the essential strategies to succeed as a top-tier seller. You will start by mastering Keyword Research to find the best terms for maximum product visibility and ranking. The curriculum covers the logistics of Flipkart Warehouses for efficient inventory management and teaches you how to analyze Performance Metrics using key data insights. You will also learn the specific criteria to earn the prestigious Flipkart Assured Badge to boost customer trust. To ensure long-term growth, we provide expert guidance on delivering excellent Customer Service, running high-performing Flipkart Ads, and creating Optimized Listings that convert visitors into buyers. Finally, you will gain practical knowledge on Handling Returns and Refunds effectively to maintain high seller ratings and keep your business profitable."


      title3="Meesho Selling Course Overview"
      about3="In this course, you’ll learn the essential strategies to succeed as an Meesho seller"
      description3="Our comprehensive Meesho Selling Course is designed to help you succeed as a top seller on India's fastest-growing social commerce platform. You will start by mastering Keyword Research to ensure your products gain maximum visibility and rank higher in searches. The curriculum covers efficient Inventory Management and teaches you how to analyze Performance Metrics using data-driven insights to grow your business. We also provide expert guidance on providing excellent Customer Service to build trust and running high-performing Meesho Ads to drive consistent sales. You will learn how to create Optimized Product Listings that attract more customers and convert them into buyers. Finally, we provide practical strategies for Handling Returns and Refunds effectively to maintain high seller ratings and ensure long-term profitability."


      title4="JioMart Selling Course Overview"
      about4="In this course, you’ll learn how to succeed as a JioMart seller"
      description4="Our comprehensive JioMart Selling Course provides you with the essential strategies to succeed as a top-tier seller on one of India’s fastest-growing retail platforms. You will start by mastering Keyword Research to ensure your products gain maximum visibility and rank higher in search results. Our curriculum covers the logistics of Inventory Management and teaches you how to analyze Performance Metrics using key data insights to scale your business. We also provide expert guidance on delivering excellent Customer Service, running high-performing JioMart Ads, and creating Optimized Product Listings that attract more customers and increase conversions. Finally, you will gain practical knowledge on Handling Returns and Refunds effectively to maintain high seller ratings and ensure long-term profitability in the marketplace"

      amazoncor={amazoncourses}
      flipcardcor={flipcardcourses}
      messhocor={messhocourses}
      jiocor={jiocourses}
     />
    </>
  )
}

export default CoursesProps
