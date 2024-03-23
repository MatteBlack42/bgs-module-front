'use client';
import styles from './Colaborador.module.css';
import Link from 'next/link';
import Image from 'next/image';

export const HorarioList = ({ horarios }) => {
    return (
        <div className={styles.ColaboradorContainer}>
            {contratos.data.map(contrato => (
                <div key={contrato.id} className={styles.Colaborador}>
                    <p>{contrato.id}</p>
                    {contrato.attributes.EPS ? (
                        <p>Si recibe</p>
                    ) : (
                        <p>No recibe</p>
                    )}

                    {contrato.attributes.seguro ? (
                        <p>Si recibe</p>
                    ) : (
                        <p>No recibe</p>
                    )}

                    <p>{contrato.attributes.TiempoLibre}</p>

                    <div className={styles.Buttons}>
                        <button className={styles.Editar}>Asignar</button>
                    </div>
                </div>
            ))}
        </div>
    );
};
