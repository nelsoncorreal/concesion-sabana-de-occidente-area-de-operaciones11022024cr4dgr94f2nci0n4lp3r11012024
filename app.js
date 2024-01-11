import firebase from 'firebase/app';
import 'firebase/firestore';

// Inicializar Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAJorwoKDkKwcJVGkLgS0Tr0JpK1ok22jM",
  authDomain: "crud-gruas.firebaseapp.com",
  projectId: "crud-gruas",
  storageBucket: "crud-gruas.appspot.com",
  messagingSenderId: "194214678017",
  appId: "1:194214678017:web:188bc5a6b4c66779ffba00"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

// Función `agregarGrua()`
function agregarGrua() {
  // Obtener valores del formulario
  const nombreOperario = document.getElementById('nombreOperario').value;
  const placaGrua = document.getElementById('placaGrua').value;
  const fechaHora = document.getElementById('fechaHora').value;
  const estadoGrua = document.getElementById('estadoGrua').value;
  const observaciones = document.getElementById('observaciones').value;
  const novedadesGrua = document.getElementById('novedadesGrua').value;

  // Agregar datos a Firestore
  const grua = {
    nombreOperario,
    placaGrua,
    fechaHora,
    estadoGrua,
    observaciones,
    novedadesGrua
  };

  db.collection('gruas').add(grua);

  // Limpiar formulario
  document.getElementById('gruaForm').reset();

  // Mensaje de éxito
  alert('Grúa agregada exitosamente');
}

// Escuchar evento click del botón "Agregar Grúa"
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('agregarGrua').addEventListener('click', agregarGrua);
});
