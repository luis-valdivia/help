<template>
  <nav>
    <ul class="primary-nav flex">
      <div class="flex right">
        <li>
          <router-link to="/">
            <span>Home</span>
          </router-link>
        </li>
        <li>
          <router-link to="/story">
            <span>Story</span>
          </router-link>
        </li>
      </div>
    </ul>
  </nav>
</template>

<style scoped>
.primary-nav {
  list-style: none;
  color: var(--primary);
  padding: 3em;
}

.flex {
  display: flex;
  gap: 4em;
}
span {
  font-size: 1rem;
  color: var(--primary);
}
</style>
