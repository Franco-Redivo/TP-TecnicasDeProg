--tabla usuarios
CREATE TABLE usuarios (
id SERIAL PRIMARY KEY,
username VARCHAR(50) NOT NULL UNIQUE,
mail VARCHAR(100) NOT NULL UNIQUE,
password VARCHAR(100) NOT NULL
);

--tabla clientes
CREATE TABLE clientes(
id SERIAL PRIMARY KEY,
usuario_id INT REFERENCES usuarios(id) ON DELETE CASCADE,
fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

--tabla profesionales
CREATE TABLE profesionales(
id SERIAL PRIMARY KEY,
usuario_id INT REFERENCES usuarios(id) ON DELETE CASCADE,
especialidad VARCHAR(100)
);

-- Crear un índice único parcial en la tabla 'clientes'
CREATE UNIQUE INDEX idx_unique_usuario_cliente
ON clientes (usuario_id)
WHERE usuario_id IS NOT NULL;

-- Crear un índice único parcial en la tabla 'profesionales'
CREATE UNIQUE INDEX idx_unique_usuario_profesional
ON profesionales (usuario_id)
WHERE usuario_id IS NOT NULL;

--tabla agenda de los profesionales
CREATE TABLE agenda_profesionales (
    id SERIAL PRIMARY KEY,
    profesional_id INT REFERENCES profesionales(id) ON DELETE CASCADE,
    dia_semana VARCHAR(15) NOT NULL,
    hora_inicio TIME NOT NULL,
    hora_fin TIME NOT NULL
);

--posibles estados que puede tener el turno
CREATE TYPE estado_turno AS ENUM ('pendiente', 'confirmado', 'completado', 'cancelado');

--tabla turnos
CREATE TABLE turnos(
id SERIAL PRIMARY KEY,
servicio_id INT REFERENCES servicios(id),
profesional_id INT REFERENCES profesionales(id),
cliente_id INT REFERENCES clientes(id),
fecha DATE NOT NULL,
hora TIME NOT NULL,
estado estado_turno NOT NULL
);

-- Crear un índice en el campo 'profesional_id' de la tabla 'turnos'
CREATE INDEX idx_turnos_profesional_id
ON turnos (profesional_id);

-- Crear un índice en el campo 'cliente_id' de la tabla 'turnos'
CREATE INDEX idx_turnos_cliente_id
ON turnos (cliente_id);

-- Crear un índice en el campo 'servicio_id' de la tabla 'turnos'
CREATE INDEX idx_turnos_servicio_id
ON turnos (servicio_id);

--tabla servicios
CREATE TABLE servicios(
id SERIAL PRIMARY KEY,
nombre VARCHAR(100) NOT NULL,
duracion INT NOT NULL
);