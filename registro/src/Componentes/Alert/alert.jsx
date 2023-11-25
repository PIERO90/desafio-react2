const [errors, setErrors] = useState({});

const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

const handleSubmit = (e) => {
  e.preventDefault();

  // Validar campos
  const newErrors = {};
  if (!formData.username) {
    newErrors.username = "Campo requerido";
  }
  if (!formData.email) {
    newErrors.email = "Campo requerido";
  }
  if (!formData.password) {
    newErrors.password = "Campo requerido";
  }
  if (formData.password !== formData.confirmPassword) {
    newErrors.confirmPassword = "Las contraseñas no coinciden";
  }

  setErrors(newErrors);

  // Si no hay errores, realizar la lógica de registro aquí
  if (Object.keys(newErrors).length === 0) {
    // Realizar la lógica de registro aquí (puede ser una llamada a una API, etc.)
    console.log("Formulario válido. Realizar la lógica de registro.");
  }
};

export default alert;
