PROJECT_NAME := john-vincent-digital

# Default target
.DEFAULT_GOAL := help

# ─── Development ──────────────────────────────────────────────

.PHONY: run
run: ## Start dev server
	npm run dev

.PHONY: build
build: ## Build for production
	npm run build

.PHONY: start
start: ## Start production server locally
	npm run start

.PHONY: lint
lint: ## Run Next.js linter
	npm run lint

.PHONY: typecheck
typecheck: ## Run TypeScript type checking
	npx tsc --noEmit

# ─── Testing ──────────────────────────────────────────────────

.PHONY: test
test: ## Run tests (not yet configured)
	@echo "No test framework configured. See TODO.md."

# ─── Deployment ───────────────────────────────────────────────

.PHONY: deploy
deploy: ## Deploy to Vercel production
	vercel --yes --prod

.PHONY: deploy-preview
deploy-preview: ## Deploy a Vercel preview
	vercel --yes

.PHONY: logs
logs: ## View Vercel deployment logs
	vercel logs $(PROJECT_NAME).vercel.app

.PHONY: status
status: ## Show git and Vercel project status
	@echo "=== Git ===" && git log --oneline -5 && echo "" && echo "=== Vercel ===" && vercel ls --limit 5

# ─── Utilities ────────────────────────────────────────────────

.PHONY: deps
deps: ## Install dependencies
	npm install

.PHONY: clean
clean: ## Remove build artifacts
	rm -rf .next

.PHONY: docs
docs: ## Serve docs locally
	python3 -m http.server 8080 --directory docs

# ─── Help ─────────────────────────────────────────────────────

.PHONY: help
help: ## Show this help
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-18s\033[0m %s\n", $$1, $$2}'
