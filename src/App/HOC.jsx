function App(props) {
  return (
    <h1>!{props.saludo}</h1>
  );
}

const withSaludo = (WrappedComponent) => (saludo) => (props) => (
  <>
    <WrappedComponent
      {...props}
      saludo={saludo}
      />
      <p>Estamos acompañando al Wraped</p>
  </>
)

const TestWith = withSaludo(App)
console.log(TestWith)