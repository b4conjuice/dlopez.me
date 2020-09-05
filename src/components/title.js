const Title = ({ className, children }) => (
  <h1
    className={`text-3xl font-extrabold leading-9 text-center sm:text-4xl sm:leading-10 ${className}`}
  >
    {children}
  </h1>
)

export default Title
