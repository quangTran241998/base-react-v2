export const useDevice = () => {
  const width = screen.width;

  return {
    isMobile: width < 768,
    isTablet: width > 1024,
    isDesktop: width > 1200,
  };
};
