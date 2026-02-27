const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Datos de ejemplo
const programas = [
  { id: 1, nombre: 'Derecho', facultad: 'Facultad de Derecho' },
  { id: 2, nombre: 'Ingeniería de Sistemas', facultad: 'Facultad de Ingeniería' },
  { id: 3, nombre: 'Medicina', facultad: 'Facultad de Ciencias de la Salud' },
  { id: 4, nombre: 'Administración de Empresas', facultad: 'Facultad de Ciencias Económicas' },
  { id: 5, nombre: 'Psicología', facultad: 'Facultad de Ciencias Humanas' }
];

// Endpoints de la API
app.get('/', (req, res) => {
  res.json({
    nombre: 'Universidad Libre de Colombia',
    sistema: 'Sistema de Gestión de Asistencia',
    version: '1.0.0',
    endpoints: [
      '/api/health',
      '/api/programas',
      '/api/estudiantes',
      '/api/profesores',
      '/api/asistencia'
    ]
  });
});

app.get('/api/health', (req, res) => {
  res.json({
    estado: 'saludable',
    mensaje: '✅ Servidor funcionando correctamente',
    universidad: 'Universidad Libre de Colombia',
    timestamp: new Date()
  });
});

app.get('/api/programas', (req, res) => {
  res.json({
    success: true,
    data: programas,
    total: programas.length
  });
});

app.get('/api/estudiantes', (req, res) => {
  res.json({
    success: true,
    data: [
      { id: '202411001', nombre: 'Ana María González', programa: 'Ingeniería de Sistemas', semestre: 3 },
      { id: '202411002', nombre: 'Carlos Rodríguez', programa: 'Derecho', semestre: 5 },
      { id: '202411003', nombre: 'Laura Martínez', programa: 'Medicina', semestre: 7 }
    ]
  });
});

app.get('/api/profesores', (req, res) => {
  res.json({
    success: true,
    data: [
      { id: 'P001', nombre: 'Dr. Juan Pérez', departamento: 'Ingeniería' },
      { id: 'P002', nombre: 'Dra. María López', departamento: 'Derecho' },
      { id: 'P003', nombre: 'Mg. Roberto Sánchez', departamento: 'Medicina' }
    ]
  });
});

app.post('/api/asistencia', (req, res) => {
  const { codigoQR, estudianteId } = req.body;
  
  res.json({
    success: true,
    mensaje: 'Asistencia registrada exitosamente',
    data: {
      estudianteId,
      fecha: new Date(),
      estado: 'PRESENTE'
    }
  });
});

app.listen(PORT, () => {
  console.log('==========================================');
  console.log('🏛️  UNIVERSIDAD LIBRE DE COLOMBIA');
  console.log('📚 Sistema de Gestión de Asistencia');
  console.log('==========================================');
  console.log(`🚀 Servidor corriendo en puerto: ${PORT}`);
  console.log(`📡 API disponible en: http://localhost:${PORT}`);
  console.log(`🔍 Health check: http://localhost:${PORT}/api/health`);
  console.log('==========================================');
});
