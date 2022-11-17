function Loader({loading}) {
  if(loading===true){
  return <h3  data-testid="loading-container">...Loading</h3>
  }
}

export default Loader;
