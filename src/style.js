const styles = {
    boxWidth: "xl:max-w-[1280px] w-full",
  
    heading2: "font-poppins font-semibold xs:text-[70px] text-[42px] text-white xs:leading-[76.8px] leading-[66.8px] w-full",
    heading3: "font-poppins font-semibold xs:text-[50px] text-[42px] text-white xs:leading-[76.8px] leading-[66.8px] w-full",
    paragraph: "font-poppins font-normal text-white text-[25px] leading-[30.8px]",
  
    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-start items-center",
    flexEnd: "flex justify-end items-center",
  
    paddingX: "sm:px-16 px-6",
    paddingY: "sm:py-16 py-6",
    padding: "sm:px-16 px-6 sm:py-12 py-4",
  
    marginX: "sm:mx-16 mx-6",
    marginY: "sm:my-16 my-6",
    
    zoomImage: {
      transition: "transform 0.3s ease",
      transformOrigin: "top center",
    },

    iconContainer: {
      borderRadius: '50%',
      width: '100px', height: '100px'
    },

    buttonContainer:{
      borderRadius: '20px 20px 20px 20px',
      width: '150px',
      padding: '10px 20px'
    },

    blogContainer: {
      borderRadius: '30px 30px 30px 30px',
    }
  };
  
  export const layout = {
    section: `flex md:flex-row flex-col ${styles.paddingY}`,
    sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,
  
    sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
    sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,
  
    sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
  };
  
  export default styles;