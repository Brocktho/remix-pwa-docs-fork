/* eslint-disable react/display-name */
export default ({ children }: any) => {
  return (
    <div className={`not-prose my-12 grid grid-cols-1 gap-6 sm:grid-cols-2`}>
      {children}
    </div>
  )
}