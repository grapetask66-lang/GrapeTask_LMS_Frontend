// TrainerModuleScreens.tsx
// -------------------------
// Barrel re-export file. All screen components have been moved to
// individual files inside the screens/ and components/ directories.
// Routing pages still import from here for backward compatibility.


export { TrainerRegistrationScreen } from './screens/TrainerRegistrationScreen';
export { TrainerDashboardOverview } from './screens/TrainerDashboardOverview';
export { TrainerProfileScreen } from './screens/TrainerProfileScreen';
export { MyCoursesScreen } from './screens/MyCoursesScreen';
export { CreateCourseScreen } from './screens/CreateCourseScreen';
export { CourseDetailsScreen } from './screens/CourseDetailsScreen';
export { VideoUploadScreen } from './screens/VideoUploadScreen';
export { VideoListScreen } from './screens/VideoListScreen';
export { McqManagementScreen } from './screens/McqManagementScreen';
export { QuizManagementScreen } from './screens/QuizManagementScreen';
export { SummaryTaskScreen } from './screens/SummaryTaskScreen';
export { useTrainerData } from './hooks/useTrainerData';
