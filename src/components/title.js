const Title = ({ className, children }) => (
  <h1
    className={`text-center text-3xl font-extrabold leading-9 sm:text-4xl sm:leading-10 ${className}`}
  >
    {children}
  </h1>
)

export default Title
