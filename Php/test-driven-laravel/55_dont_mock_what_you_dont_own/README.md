# Option 1: Mock the Stripe API Client

## Pros

- Tests are fast
- Tests can run without internet access

## Cons

- Tests will pass even if we aren't using Stripe's SDK correctly
- Tests can't be used to confirm our integration works if Stripe makes an update to their SDK or API
- Tests are coupled to a specific implementation; can't refactor to use Guzzle or another Stripe library


## Option 2: Integration Test Against Stripe

## Pros

- Tests will fail if we use Stripe's library incorrectly
- Tests will fail if Stripe makes a breaking change to their SDK or API that would require us to change our code
- Tests are still valid even if we change our implementation to use Guzzle or an unofficial Stripe package

## Cons

- Tests are slow
- Tests can't run without internet access
