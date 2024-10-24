CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    mail VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(100) NOT NULL,
    rol VARCHAR(20) NOT NULL CHECK (rol IN ('cliente', 'profesional')) DEFAULT 'cliente',
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- tabla agenda para profesionales
CREATE TABLE agenda_profesionales (
    id SERIAL PRIMARY KEY,
    usuario_id INT REFERENCES usuarios(id) ON DELETE CASCADE,
    dia_semana VARCHAR(15) NOT NULL,
    hora_inicio TIME NOT NULL,
    hora_fin TIME NOT NULL,
    CONSTRAINT fk_profesionales CHECK ((SELECT rol FROM usuarios WHERE id = usuario_id) = 'profesional')
);

--tabla servicios
CREATE TABLE servicios(
id SERIAL PRIMARY KEY,
nombre VARCHAR(100) NOT NULL,
duracion INT NOT NULL
);

--tabla profesional_servicios
CREATE TABLE profesional_servicios (
    profesional_id INT REFERENCES usuarios(id) ON DELETE CASCADE,
    servicio_id INT REFERENCES servicios(id) ON DELETE CASCADE,
    PRIMARY KEY (profesional_id, servicio_id),
    CHECK ((SELECT rol FROM usuarios WHERE id = profesional_id) = 'profesional')
);


--posibles estados que puede tener el turno
CREATE TYPE estado_turno AS ENUM ('pendiente','cancelado');

--tabla turnos
CREATE TABLE turnos(
    id SERIAL PRIMARY KEY,
    servicio_id INT REFERENCES servicios(id),
    profesional_id INT REFERENCES usuarios(id),
    cliente_id INT REFERENCES usuarios(id),
    fecha DATE NOT NULL,
    hora_inicio TIME NOT NULL,
    hora_fin TIME NOT NULL,
    estado estado_turno NOT NULL,
    CONSTRAINT fk_profesional CHECK ((SELECT rol FROM usuarios WHERE id = profesional_id) = 'profesional'),
    CONSTRAINT fk_cliente CHECK ((SELECT rol FROM usuarios WHERE id = cliente_id) = 'cliente')
);


