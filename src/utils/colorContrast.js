function getTextContrastColor(hexColor) {
    /**
     * Returns a Tailwind text color class based on the luminance of a given
     * hex color code.
     */
    // Remove the '#' if it's included in the hex color
    hexColor = hexColor.replace(/^#/, '')
    
    // Convert the hex color to RGB
    const r = parseInt(hexColor.slice(0, 2), 16)
    const g = parseInt(hexColor.slice(2, 4), 16)
    const b = parseInt(hexColor.slice(4, 6), 16)
  
    // Calculate the relative luminance of the background color
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  
    // Choose black or white text color based on the luminance
    return luminance > 0.5 ? '#161128' : '#fbfdfb'
}

export { getTextContrastColor }