import { combineReducers } from 'redux';

// reducer import
import customizationReducer from './customizationReducer';
import subCategorySlice from './sub-category/SubCategoryReducer';
import categorySlice from './category/categoryReducer';
import teacherDetailsSlice from './teacher/teacherReducer';
import courseDetailsReducer from './course/courseDetailsReducer';
import courseContentReducer from './course/courseContentReducer';

// ==============================|| COMBINE REDUCER ||============================== //

const reducer = combineReducers({
    customization: customizationReducer,
    category: categorySlice,
    subCategory: subCategorySlice,
    teacher: teacherDetailsSlice,
    course: courseDetailsReducer,
    courseContent: courseContentReducer,
});

export default reducer;
