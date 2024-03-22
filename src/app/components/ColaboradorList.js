'use client';
import styles from './Colaborador.module.css';
import Link from 'next/link';
import Image from 'next/image';

export const ColaboradorList = ({
    colaboradores,
    deleteColaborador,
    cesarColaborador,
}) => {
    return (
        <div className={styles.ColaboradorContainer}>
            {console.log(colaboradores)}
            {colaboradores.data.map(colaborador => (
                <div key={colaborador.id} className={styles.Colaborador}>
                    <p>{colaborador.attributes.Nombres}</p>
                    <p>{colaborador.attributes.Apellidos}</p>
                    <p>{colaborador.attributes.Area}</p>
                    <p>{colaborador.attributes.Cargo}</p>

                    <div className={styles.Buttons}>
                        <button className={styles.Editar}>Editar</button>
                        {colaborador.attributes.Cesado ? (
                            <button
                                className={styles.Integrar}
                                onClick={() =>
                                    cesarColaborador(
                                        colaborador.id,
                                        colaborador.attributes.Cesado
                                    )
                                }
                            >
                                Integrar
                            </button>
                        ) : (
                            <button
                                className={styles.Cesar}
                                onClick={() =>
                                    cesarColaborador(
                                        colaborador.id,
                                        colaborador.attributes.Cesado
                                    )
                                }
                            >
                                Cesar
                            </button>
                        )}

                        <button
                            className={styles.Eliminar}
                            onClick={() => deleteColaborador(colaborador.id)}
                        >
                            Eliminar
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};
