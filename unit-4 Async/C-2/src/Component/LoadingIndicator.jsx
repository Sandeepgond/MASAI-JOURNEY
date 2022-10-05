function LoadingIndicator({loading}) {
  if(loading===true){
    return <div data-testid="loading-indicator">...Loading</div>;
  }
 
}

export default LoadingIndicator;
