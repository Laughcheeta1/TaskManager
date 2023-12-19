import { BrowserRouter, Routes, Route } from "react-router-dom";

import RegisterPage from "./pages/Users/RegisterPage";
import LoginPage from "./pages/Users/LoginPage";

import HomePage from "./pages/HomePage";
import TaskPage from "./pages/TaskPage";
import IndividualTaskPage from "./pages/Tasks/IndividualTaskPage";

import TaskFormPage from "./pages/Tasks/Add_ModifyTask";

import { TasksProvider } from "./context/TasksContext";

import { AuthProvider } from "./context/AuthContext";

import Navbar from "./components/Navbar";

import ProtectedRoute from "./ProtectedRoute";

export default function App() {
  return (
    <AuthProvider>
      <TasksProvider>
              <BrowserRouter>
                <Navbar />
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="/register" element={<RegisterPage />} />
                  <Route path="/add_task" element={<TaskFormPage />} />
                  <Route path="/task/:id" element={<IndividualTaskPage />} />

                  <Route element={<ProtectedRoute />}>
                    <Route path="/task_page" element={<TaskPage />} />
                  </Route>
                </Routes>
              </BrowserRouter>
      </TasksProvider>
    </AuthProvider>
  );
}
