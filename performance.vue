<todos-item
    v-for="(todo, index) in todos"
    :key="index"
    :todo="todo"
    @item-click="handleItemClick"
></todos-item>
