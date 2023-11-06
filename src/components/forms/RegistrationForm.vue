<template>
<main class="bg-gray-100 my-6 mx-4 rounded-xl py-6 px-4 sm:p-6 md:py-12 md:px-8">
  <div class="max-w-4xl mx-auto lg:max-w-5xl">
    <div class="relative p-3 flex flex-col sm:p-0">
      <h1 class="mb-5 text-2xl font-semibold text-white">Registrieren</h1>
      <p class="leading-4 font-medium text-white">
        Erstelle hier ein kostenloses SunSet-Konto.
      </p> 

    <form>
      <div class="space-y-12">
        <div class="border-b border-gray-900/10 pb-12">
          <h2 class="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
          <p class="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>

          <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div class="sm:col-span-3">
              <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">Vorname</label>
              <div class="mt-2">
                <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="block w-full rounded-md border-0 p-1.5 text-white ring-1 ring-inset ring-gray-300 placeholder:text-gray-700 focus:ring-2 :focus:none focus:ring-inset focus:ring-yellow sm:text-sm sm:leading-6" />
              </div>
            </div>

            <div class="sm:col-span-3">
              <label for="last-name" class="block text-sm font-medium leading-6 text-gray-900">Last name</label>
              <div class="mt-2">
                <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="block w-full rounded-md border-0 p-1.5 text-white ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow sm:text-sm sm:leading-6" />
              </div>
            </div>

            <div class="sm:col-span-4">
              <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
              <div class="mt-2">
                <input id="email" name="email" type="email" autocomplete="email" class="block w-full rounded-md border-0 p-1.5 text-white ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow sm:text-sm sm:leading-6" />
              </div>
            </div>

            <div class="sm:col-span-3">
              <label for="country" class="block text-sm font-medium leading-6 text-gray-900">Country</label>
              <div class="mt-2">
                <select id="country" name="country" autocomplete="country-name" class="block w-full rounded-md border-0 p-1.5 text-white ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-yellow sm:max-w-xs sm:text-sm sm:leading-6">
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Mexico</option>
                </select>
              </div>
            </div>

            <div class="col-span-full">
              <label for="street-address" class="block text-sm font-medium leading-6 text-gray-900">Street address</label>
              <div class="mt-2">
                <input type="text" name="street-address" id="street-address" autocomplete="street-address" class="block w-full rounded-md border-0 p-1.5 text-white ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow sm:text-sm sm:leading-6" />
              </div>
            </div>

            <div class="sm:col-span-2 sm:col-start-1">
              <label for="city" class="block text-sm font-medium leading-6 text-gray-900">City</label>
              <div class="mt-2">
                <input type="text" name="city" id="city" autocomplete="address-level2" class="block w-full rounded-md border-0 p-1.5 text-white ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow sm:text-sm sm:leading-6" />
              </div>
            </div>

            <div class="sm:col-span-2">
              <label for="region" class="block text-sm font-medium leading-6 text-gray-900">State / Province</label>
              <div class="mt-2">
                <input type="text" name="region" id="region" autocomplete="address-level1" class="block w-full rounded-md border-0 p-1.5 text-white ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow sm:text-sm sm:leading-6" />
              </div>
            </div>

            <div class="sm:col-span-2">
              <label for="postal-code" class="block text-sm font-medium leading-6 text-gray-900">ZIP / Postal code</label>
              <div class="mt-2">
                <input type="text" name="postal-code" id="postal-code" autocomplete="postal-code" class="block w-full rounded-md border-0 p-1.5 text-white ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow sm:text-sm sm:leading-6" />
              </div>
            </div>
          </div>
        </div>

        <div class="border-b border-gray-900/10 pb-12">
          <h2 class="text-base font-semibold leading-7 text-gray-900">Notifications</h2>
          <p class="mt-1 text-sm leading-6 text-gray-600">We'll always let you know about important changes, but you pick what else you want to hear about.</p>

          <div class="mt-10 space-y-10">
            <fieldset>
              <legend class="text-sm font-semibold leading-6 text-gray-900">By Email</legend>
              <div class="mt-6 space-y-6">
                <div class="relative flex gap-x-3">
                  <div class="flex h-6 items-center">
                    <input id="comments" name="comments" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                  </div>
                  <div class="text-sm leading-6">
                    <label for="comments" class="font-medium text-gray-900">Comments</label>
                    <p class="text-gray-500">Get notified when someones posts a comment on a posting.</p>
                  </div>
                </div>
                <div class="relative flex gap-x-3">
                  <div class="flex h-6 items-center">
                    <input id="candidates" name="candidates" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                  </div>
                  <div class="text-sm leading-6">
                    <label for="candidates" class="font-medium text-gray-900">Candidates</label>
                    <p class="text-gray-500">Get notified when a candidate applies for a job.</p>
                  </div>
                </div>
                <div class="relative flex gap-x-3">
                  <div class="flex h-6 items-center">
                    <input id="offers" name="offers" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                  </div>
                  <div class="text-sm leading-6">
                    <label for="offers" class="font-medium text-gray-900">Offers</label>
                    <p class="text-gray-500">Get notified when a candidate accepts or rejects an offer.</p>
                  </div>
                </div>
              </div>
            </fieldset>
            <fieldset>
              <legend class="text-sm font-semibold leading-6 text-gray-900">Push Notifications</legend>
              <p class="mt-1 text-sm leading-6 text-gray-600">These are delivered via SMS to your mobile phone.</p>
              <div class="mt-6 space-y-6">
                <div class="flex items-center gap-x-3">
                  <input id="push-everything" name="push-notifications" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                  <label for="push-everything" class="block text-sm font-medium leading-6 text-gray-900">Everything</label>
                </div>
                <div class="flex items-center gap-x-3">
                  <input id="push-email" name="push-notifications" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                  <label for="push-email" class="block text-sm font-medium leading-6 text-gray-900">Same as email</label>
                </div>
                <div class="flex items-center gap-x-3">
                  <input id="push-nothing" name="push-notifications" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                  <label for="push-nothing" class="block text-sm font-medium leading-6 text-gray-900">No push notifications</label>
                </div>
              </div>
            </fieldset>
          </div>
        </div>
      </div>

      <div class="mt-6 flex items-center justify-end gap-x-6">
        <ButtonPrimary>Konto erstellen</ButtonPrimary>
      </div>
    </form>

    </div> 
  </div>
</main>
</template>

<script>
import ButtonPimary from '@/components/buttons/ButtonPrimary.vue'

export default {
  components: {
    ButtonPimary,
  },
  methods: {
      submitUser() {

    }
  }
}
</script>
