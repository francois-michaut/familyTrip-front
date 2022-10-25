/* eslint-disable react/button-has-type */

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';

import './account.scss';
import { saveFormUser } from '../../actions/users';

function Account() {
  const formSchema = yup.object().shape({
    userPassword: yup.string()
      .required('Vous devez choisir un mot de passe')
      .min(8, 'Le mot de passe doit faire au moins 8 caractères')
      .matches(/([0-9])/, 'Votre mot de passe doit contenir au moins un entier'),
    userConfirmPassword: yup.string()
      .required('Vous devez confirmer votre mot de passe')
      .min(8, 'Le mot de passe doit faire au moins 8 caractères')
      .oneOf([yup.ref('userPassword')], 'Les mots de passe ne concordent pas.'),
    userName: yup.string()
      .required('Vous devez renseigner un nom de famille'),
    userFirstname: yup.string()
      .required('Vous devez renseigner un prénom'),
    userMail: yup.string()
      .required('Vous devez renseigner un mail')
      .email('Le mail est invalide'),
    userPseudo: yup.string()
      .required('Merci de renseigner votre pseudo'),
  });

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  function onSubmit(data) {
    dispatch(saveFormUser(data));
  }

  return (
    <main className="account">
      <h2 className="account__title">Créer un compte</h2>
      <form className="account__form" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-2">
          <label htmlFor="userName" className="form-label">Votre nom
            <input
              type="text"
              className="form-control"
              id="userName"
              {...register('userName')}
            />
          </label>
        </div>
        {errors.userName && <div className="alert alert-danger" role="alert">{errors.userName.message}</div>}

        <div className="mb-2">
          <label htmlFor="userFirstname" className="form-label">Votre prénom
            <input
              type="text"
              className="form-control"
              id="userFirstname"
              {...register('userFirstname')}
            />
          </label>
        </div>
        {errors.userFirstname && <div className="alert alert-danger" role="alert">{errors.userFirstname.message}</div>}

        <div className="mb-2">
          <label htmlFor="userMail" className="form-label">Votre email
            <input
              type="text"
              className="form-control"
              id="userMail"
              {...register('userMail')}
            />
          </label>
        </div>
        {errors.userMail && <div className="alert alert-danger" role="alert">{errors.userMail.message}</div>}

        <div className="mb-2">
          <label htmlFor="userPseudo" className="form-label">Votre pseudo
            <input
              type="text"
              className="form-control"
              id="userPseudo"
              {...register('userPseudo')}
            />
          </label>
        </div>
        {errors.userPseudo && <div className="alert alert-danger" role="alert">{errors.userPseudo.message}</div>}
        <div className="mb-2">
          <label htmlFor="userPassword" className="form-label">Mot de passe
            <input
              type="password"
              className="form-control"
              id="userPassword"
              {...register('userPassword')}
            />
          </label>
        </div>
        {errors.userPassword && <div className="alert alert-danger" role="alert">{errors.userPassword.message}</div>}
        <div className="mb-2">
          <label htmlFor="userConfirmPassword" className="form-label">Confirmez votre mot de passe
            <input
              type="password"
              className="form-control"
              id="userConfirmPassword"
              {...register('userConfirmPassword')}
            />
          </label>
        </div>
        {errors.userConfirmPassword && <div className="alert alert-danger" role="alert">{errors.userConfirmPassword.message}</div>}
        <button
          className="btn btn-success"
        >
          Créer votre compte
        </button>
      </form>
    </main>
  );
}

// export
export default Account;
