
// import React, { useState } from 'react';
// import styles from './styles/newClient.module.css';

// const NewClientModal = ({ open, handleClose, onAdd }) => {
//   const [formData, setFormData] = useState({
//     name: '',
//     contact: '',
//     email: '',
//     valorMaximo: '',
//     tipoImovel: '',
//     localizacaoDesejada: '',
//     requisitos: {
//       quartosDesejados: '',
//       banheirosDesejados: '',
//       vagasDesejadas: '',
//       areaMinima: '',
//       extras: []
//     }
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
    
//     if (name.includes('requisitos.')) {
//       const [, field] = name.split('requisitos.');
//       setFormData(prev => ({
//         ...prev,
//         requisitos: {
//           ...prev.requisitos,
//           [field]: value
//         }
//       }));
//     } else {
//       setFormData(prev => ({
//         ...prev,
//         [name]: value
//       }));
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onAdd({
//       ...formData,
//       _id: Date.now().toString() // Gerando um ID único
//     });
//     handleClose();
//     setFormData({
//       name: '',
//       contact: '',
//       email: '',
//       valorMaximo: '',
//       tipoImovel: '',
//       localizacaoDesejada: '',
//       requisitos: {
//         quartosDesejados: '',
//         banheirosDesejados: '',
//         vagasDesejadas: '',
//         areaMinima: '',
//         extras: []
//       }
//     });
//   };

//   return (
//     <div className={`${styles.modal} ${open ? styles.visible : ''}`}>
//       <div className={styles.modalContent}>
//         <h2 className={styles.heading}>Novo Cliente</h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div className={styles.formGroup}>
//             <div className={styles.formControl}>
//               <label htmlFor="name" className={styles.label}>Nome</label>
//               <input
//                 id="name"
//                 name="name"
//                 type="text"
//                 required
//                 value={formData.name}
//                 onChange={handleChange}
//                 className={styles.input}
//               />
//             </div>

//             <div className={styles.formControl}>
//               <label htmlFor="contact" className={styles.label}>Contato</label>
//               <input
//                 id="contact"
//                 name="contact"
//                 type="text"
//                 required
//                 value={formData.contact}
//                 onChange={handleChange}
//                 className={styles.input}
//               />
//             </div>

//             <div className={styles.formControl}>
//               <label htmlFor="email" className={styles.label}>Email</label>
//               <input
//                 id="email"
//                 name="email"
//                 type="email"
//                 required
//                 value={formData.email}
//                 onChange={handleChange}
//                 className={styles.input}
//               />
//             </div>

//             <div className={styles.formControl}>
//               <label htmlFor="valorMaximo" className={styles.label}>Orçamento (€)</label>
//               <input
//                 id="valorMaximo"
//                 name="valorMaximo"
//                 type="number"
//                 required
//                 value={formData.valorMaximo}
//                 onChange={handleChange}
//                 className={styles.input}
//               />
//             </div>

//             <div className={styles.formControl}>
//               <label htmlFor="tipoImovel" className={styles.label}>Tipo do Imóvel</label>
//               <select
//                 id="tipoImovel"
//                 name="tipoImovel"
//                 required
//                 value={formData.tipoImovel}
//                 onChange={handleChange}
//                 className={styles.select}
//               >
//                 <option value="">Selecione...</option>
//                 <option value="Casa">Casa</option>
//                 <option value="Apartamento">Apartamento</option>
//               </select>
//             </div>

//             <div className={styles.formControl}>
//               <label htmlFor="localizacaoDesejada" className={styles.label}>Localização Desejada</label>
//               <input
//                 id="localizacaoDesejada"
//                 name="localizacaoDesejada"
//                 type="text"
//                 required
//                 value={formData.localizacaoDesejada}
//                 onChange={handleChange}
//                 className={styles.input}
//               />
//             </div>

//             <div className={styles.formControl}>
//               <label htmlFor="requisitos.quartosDesejados" className={styles.label}>
//                 Quarto
//               </label>
//               <input
//                 id="requisitos.quartosDesejados"
//                 name="requisitos.quartosDesejados"
//                 type="number"
//                 required
//                 value={formData.requisitos.quartosDesejados}
//                 onChange={handleChange}
//                 className={styles.input}
//               />
//             </div>

//             <div className={styles.formControl}>
//               <label htmlFor="requisitos.banheirosDesejados" className={styles.label}>
//                 Casa de Banho
//               </label>
//               <input
//                 id="requisitos.banheirosDesejados"
//                 name="requisitos.banheirosDesejados"
//                 type="number"
//                 required
//                 value={formData.requisitos.banheirosDesejados}
//                 onChange={handleChange}
//                 className={styles.input}
//               />
//             </div>

//             <div className={styles.formControl}>
//               <label htmlFor="requisitos.areaMinima" className={styles.label}>
//                 Área Mínima (m²)
//               </label>
//               <input
//                 id="requisitos.areaMinima"
//                 name="requisitos.areaMinima"
//                 type="number"
//                 required
//                 value={formData.requisitos.areaMinima}
//                 onChange={handleChange}
//                 className={styles.input}
//               />
//             </div>
//           </div>

//           <div className={styles.actions}>
//             <button
//               type="button"
//               onClick={handleClose}
//               className={`${styles.button} ${styles.cancelButton}`}
//             >
//               Cancelar
//             </button>
//             <button
//               type="submit"
//               className={`${styles.button} ${styles.submitButton}`}
//             >
//               Salvar
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default NewClientModal;
import React, { useState } from 'react';
import styles from '@/client/styles/newClient.module.css';

const NewClientModal = ({ open, handleClose, onAdd }) => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    email: '',
    valorMaximo: '',
    tipoImovel: '',
    localizacaoDesejada: '',
    requisitos: {
      quartosDesejados: '',
      banheirosDesejados: '',
      vagasDesejadas: '',
      areaMinima: '',
      extras: []
    }
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    if (name.includes('requisitos.')) {
      const [, field] = name.split('requisitos.');
      setFormData(prev => ({
        ...prev,
        requisitos: {
          ...prev.requisitos,
          [field]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({
      ...formData,
      _id: Date.now().toString() // Gerando um ID único
    });
    handleClose();
    setFormData({
      name: '',
      contact: '',
      email: '',
      valorMaximo: '',
      tipoImovel: '',
      localizacaoDesejada: '',
      requisitos: {
        quartosDesejados: '',
        banheirosDesejados: '',
        vagasDesejadas: '',
        areaMinima: '',
        extras: []
      }
    });
  };

  return (
    <div className={`${styles.modal} ${open ? styles.visible : ''}`}>
      <div className={styles.modalContent}>
        <h2 className={styles.heading}>Novo Cliente</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className={styles.formGroup}>
            <div className={styles.formControl}>
              <label htmlFor="name" className={styles.label}>Nome</label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                className={styles.input}
              />
            </div>

            <div className={styles.formControl}>
              <label htmlFor="contact" className={styles.label}>Contato</label>
              <input
                id="contact"
                name="contact"
                type="text"
                value={formData.contact}
                onChange={handleChange}
                className={styles.input}
              />
            </div>

            <div className={styles.formControl}>
              <label htmlFor="email" className={styles.label}>Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className={styles.input}
              />
            </div>

            <div className={styles.formControl}>
              <label htmlFor="valorMaximo" className={styles.label}>Orçamento (€)</label>
              <input
                id="valorMaximo"
                name="valorMaximo"
                type="number"
                value={formData.valorMaximo}
                onChange={handleChange}
                className={styles.input}
              />
            </div>

            <div className={styles.formControl}>
              <label htmlFor="tipoImovel" className={styles.label}>Tipo do Imóvel</label>
              <select
                id="tipoImovel"
                name="tipoImovel"
                value={formData.tipoImovel}
                onChange={handleChange}
                className={styles.select}
              >
                <option value="">Selecione...</option>
                <option value="Casa">Casa</option>
                <option value="Apartamento">Apartamento</option>
              </select>
            </div>

            <div className={styles.formControl}>
              <label htmlFor="localizacaoDesejada" className={styles.label}>Localização Desejada</label>
              <input
                id="localizacaoDesejada"
                name="localizacaoDesejada"
                type="text"
                value={formData.localizacaoDesejada}
                onChange={handleChange}
                className={styles.input}
              />
            </div>

            <div className={styles.formControl}>
              <label htmlFor="requisitos.quartosDesejados" className={styles.label}>
                Quarto
              </label>
              <input
                id="requisitos.quartosDesejados"
                name="requisitos.quartosDesejados"
                type="number"
                value={formData.requisitos.quartosDesejados}
                onChange={handleChange}
                className={styles.input}
              />
            </div>

            <div className={styles.formControl}>
              <label htmlFor="requisitos.banheirosDesejados" className={styles.label}>
                Casa de Banho
              </label>
              <input
                id="requisitos.banheirosDesejados"
                name="requisitos.banheirosDesejados"
                type="number"
                value={formData.requisitos.banheirosDesejados}
                onChange={handleChange}
                className={styles.input}
              />
            </div>

            <div className={styles.formControl}>
              <label htmlFor="requisitos.areaMinima" className={styles.label}>
                Área Mínima (m²)
              </label>
              <input
                id="requisitos.areaMinima"
                name="requisitos.areaMinima"
                type="number"
                value={formData.requisitos.areaMinima}
                onChange={handleChange}
                className={styles.input}
              />
            </div>
          </div>

          <div className={styles.actions}>
            <button
              type="button"
              onClick={handleClose}
              className={`${styles.button} ${styles.cancelButton}`}
            >
              Cancelar
            </button>
            <button
              type="submit"
              className={`${styles.button} ${styles.submitButton}`}
            >
              Salvar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewClientModal;