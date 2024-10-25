
export function toggleLesson(module, lesson) {
    return {
        type: 'TOGGLE_LESSON', // Type é uma Chave padrão, indica do redux, indica a ação que está sendo realizada
        module,
        lesson,
    };
}