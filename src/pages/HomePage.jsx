import { useDispatch } from 'react-redux'
import { useAuth } from "../hooks/use-auth"
import { Header } from '../components/ui/Header'
import { removeUser } from '../store/slices/userSlice'
import { Navigate } from 'react-router-dom'
import { ListTasks } from '../components/tasks/ListTasks'


export const HomePage = () => {

	const { isAuth, email } = useAuth();
	const dispatch = useDispatch()

	const clickHandler = () => {
		dispatch(removeUser())
	}


	return (
		// isAuth ? (
			<>
				<Header removeUser={clickHandler} email={email} />
				<ListTasks/>
			</>
		// ) : <Navigate to={"/login"} />
	)
}
