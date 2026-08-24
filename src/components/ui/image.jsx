import React from 'react'

const FALLBACK_IMAGE_URL =
  'https://static.wixstatic.com/media/12d367_4f26ccd17f8f4e3a8958306ea08c2332~mv2.png'

export const Image = React.forwardRef(function Image(
  { src, fittingType = 'fill', className, style, onError, alt = '', ...props },
  ref,
) {
  const [currentSrc, setCurrentSrc] = React.useState(src || FALLBACK_IMAGE_URL)

  React.useEffect(() => {
    setCurrentSrc(src || FALLBACK_IMAGE_URL)
  }, [src])

  const handleError = (event) => {
    if (currentSrc !== FALLBACK_IMAGE_URL) {
      setCurrentSrc(FALLBACK_IMAGE_URL)
      return
    }
    onError?.(event)
  }

  return (
    <img
      ref={ref}
      src={currentSrc}
      alt={alt}
      className={className}
      style={{
        objectFit: fittingType === 'fit' ? 'contain' : 'cover',
        ...style,
      }}
      onError={handleError}
      {...props}
    />
  )
})

Image.displayName = 'Image'
